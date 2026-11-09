const TAU = Math.PI * 2;
const mix = (from, to, progress) => from + (to - from) * progress;

function glow(ctx, x, y, radius, color) {
  const fill = ctx.createRadialGradient(x, y, 0, x, y, radius);
  fill.addColorStop(0, color);
  fill.addColorStop(1, 'transparent');
  ctx.fillStyle = fill;
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
}

function ellipse(ctx, x, y, rx, ry, angle, fill) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, angle, 0, TAU);
  ctx.fillStyle = fill;
  ctx.fill();
}

const profile = [[0, 1], [5, 4], [16, 15], [26, 29], [31, 40], [31, 48],
  [27, 53], [9, 61], [5, 67], [4, 86], [6, 89], [6, 95], [3, 98], [0, 98]];

function brassTop(ctx, time) {
  const tilt = .13 * Math.sin(time * 2.1);
  const phase = time * 12;
  const faces = [];
  const points = profile.map(([r, h]) => Array.from({ length: 48 }, (_, i) => {
    const a = i * TAU / 48 + phase;
    const x = r * Math.cos(a);
    const z = r * Math.sin(a);
    return [200 + x + tilt * h, 162 - h * .94 + z * .37, z + .34 * h];
  }));

  for (let row = 1; row < points.length; row++) {
    for (let i = 0; i < 48; i++) {
      const next = (i + 1) % 48;
      const corners = [points[row - 1][i], points[row - 1][next], points[row][next], points[row][i]];
      const a = (i + .5) * TAU / 48 + phase;
      const light = .5 + .5 * Math.cos(a - 2.48);
      const highlight = Math.pow(light, 13);
      const rim = row === 5 ? 25 : 0;
      const machined = (i % 4 === 0 && row > 8 ? -24 : 0) + (i % 7 === 0 ? 4 : 0);
      faces.push({ corners, z: corners.reduce((sum, point) => sum + point[2], 0),
        color: `rgb(${52 + 132 * light + 55 * highlight + rim + machined}, ${31 + 93 * light + 64 * highlight + rim + machined}, ${19 + 46 * light + 69 * highlight + rim + machined})` });
    }
  }

  faces.sort((a, b) => a.z - b.z);
  function paint() {
    for (const { corners, color } of faces) {
      ctx.beginPath();
      ctx.moveTo(corners[0][0], corners[0][1]);
      for (const [x, y] of corners.slice(1)) ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = .5;
      ctx.fill();
      ctx.stroke();
    }
  }

  glow(ctx, 200, 160, 68, '#f5963926');
  ellipse(ctx, 201, 162, 47, 8, -.02, '#05020191');
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 162, 400, 64);
  ctx.clip();
  ctx.translate(0, 226.8);
  ctx.scale(1, -.4);
  ctx.globalAlpha = .19;
  ctx.filter = 'blur(2px)';
  paint();
  ctx.restore();
  paint();
  glow(ctx, 192 + tilt * 48, 112, 23, '#ffd59330');
}

function blackHole(ctx, time) {
  const x = 200, y = 113;
  const diskAngle = -.14;
  glow(ctx, x, y, 119, '#bd49284a');
  glow(ctx, x, y, 78, '#ff89454a');

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(diskAngle);
  for (let i = 0; i < 23; i++) {
    const radius = 49 + i * 4.2;
    const alpha = .14 - i * .0054;
    ctx.beginPath();
    ctx.ellipse(0, 0, radius, radius * .235, 0, 0, TAU);
    ctx.strokeStyle = `rgba(255,${152 - i * 3},${73 - i * 2},${alpha})`;
    ctx.lineWidth = 2.5 + i * .15;
    ctx.stroke();
  }
  for (let i = 0; i < 144; i++) {
    const r = 45 + (i * 47 % 104);
    const angle = i * 2.39996 + time * (1.7 - r * .006);
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r * .24;
    const brightness = .2 + .45 * Math.max(0, Math.sin(angle));
    ctx.fillStyle = `rgba(255,${151 + i % 95},${77 + i % 108},${brightness})`;
    ctx.fillRect(px, py, 1 + i % 4, i % 7 ? .7 : 1.5);
  }
  ctx.restore();

  ellipse(ctx, x, y, 47, 47, 0, '#040307');
  for (let i = 0; i < 15; i++) {
    ctx.beginPath();
    ctx.ellipse(x, y - 3, 48 + i * .7, 49 + i * 1.2, diskAngle, Math.PI + .19, TAU - .12);
    ctx.strokeStyle = `rgba(255,${203 - i * 4},${139 - i * 5},${.23 - i * .013})`;
    ctx.lineWidth = 1.75;
    ctx.stroke();
  }
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(diskAngle);
  const edge = ctx.createLinearGradient(-142, 0, 142, 0);
  edge.addColorStop(0, 'transparent');
  edge.addColorStop(.28, '#ff9b5c');
  edge.addColorStop(.52, '#ffe3ab');
  edge.addColorStop(.76, '#d46339');
  edge.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.ellipse(0, 0, 141, 28, 0, 0, Math.PI);
  ctx.shadowColor = '#ff6b37';
  ctx.shadowBlur = 14;
  ctx.strokeStyle = edge;
  ctx.lineWidth = 3.5;
  ctx.stroke();
  ctx.restore();
  glow(ctx, x - 35 + Math.cos(time * .8) * 19, y - 42, 21, '#ffba623e');
}

// Each pose describes the head, shoulders, hips, elbows, fists, knees and feet.
const guard = [[1,-94],[0,-73],[-6,-42],[-12,-58],[8,-75],[15,-63],[28,-77],[-22,-26],[-30,0],[13,-24],[22,0]];
const jab = [[9,-92],[7,-72],[1,-41],[-9,-58],[9,-72],[34,-69],[60,-73],[-18,-23],[-26,0],[22,-25],[29,0]];
const slip = [[-13,-80],[-8,-63],[-5,-40],[-17,-47],[-7,-65],[9,-52],[18,-66],[-24,-24],[-31,0],[13,-25],[22,0]];
const cross = [[13,-89],[10,-71],[2,-43],[33,-69],[60,-77],[7,-55],[18,-72],[-15,-24],[-25,0],[24,-23],[29,0]];
const bout = [
  [127, 273, guard, guard], [148, 252, guard, guard], [153, 228, jab, slip],
  [148, 250, guard, guard], [161, 225, slip, cross], [152, 250, guard, guard],
  [154, 229, cross, slip], [154, 231, slip, jab], [127, 273, guard, guard],
];

function wireFighter(ctx, pose, color) {
  const [head, neck, hip, backElbow, backHand, elbow, hand, backKnee, backFoot, knee, foot] = pose;
  const connections = [[hip,backKnee,backFoot], [neck,backElbow,backHand], [head,neck,hip],
    [hip,knee,foot], [neck,elbow,hand]];
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (let i = 0; i < connections.length; i++) {
    const [a, b, c] = connections[i];
    ctx.beginPath();
    ctx.moveTo(...a);
    ctx.lineTo(...b);
    ctx.lineTo(...c);
    ctx.strokeStyle = '#130c14';
    ctx.lineWidth = i === 2 ? 7 : 5.5;
    ctx.stroke();
    ctx.save();
    ctx.translate(-.7, -.7);
    ctx.strokeStyle = color;
    ctx.globalAlpha *= i < 2 ? .3 : .8;
    ctx.lineWidth = i === 2 ? 2.2 : 1.4;
    ctx.stroke();
    ctx.restore();
    ellipse(ctx, ...b, 2.15, 2.15, 0, color);
  }
  const shade = ctx.createRadialGradient(head[0] - 3, head[1] - 4, 1, ...head, 10);
  shade.addColorStop(0, color);
  shade.addColorStop(.63, '#37222c');
  shade.addColorStop(1, '#120c14');
  ellipse(ctx, ...head, 9.5, 10.5, -.13, shade);
  for (const [x, y] of [hand, backHand]) ellipse(ctx, x, y, 4, 3.6, 0, color);
}

function fight(ctx, time) {
  const phase = (time % 5.6) / 5.6 * (bout.length - 1);
  const index = Math.floor(phase);
  const raw = phase - index;
  const t = raw * raw * (3 - 2 * raw);
  const a = bout[index], b = bout[index + 1];
  const floor = 183;
  const fighters = [0, 1].map((i) => ({
    x: mix(a[i], b[i], t),
    facing: i ? -1 : 1,
    pose: a[i + 2].map(([x, y], point) => [mix(x, b[i + 2][point][0], t), mix(y, b[i + 2][point][1], t)]),
    color: i ? '#e6a3cc' : '#ffc285',
  }));

  for (let i = 0; i < 28; i++) {
    const x = 100 + ((i * 47.7 + time * (2 + i % 3)) % 200);
    const y = 26 + ((i * 35.1 - time * 3 + 70000) % 153);
    ellipse(ctx, x, y, i % 6 ? .45 : .9, .65, 0, '#ffd49a55');
  }
  for (const { x, facing, pose, color } of fighters) {
    ellipse(ctx, x, floor + 2, 44, 8, -.06 * facing, '#0805099b');
    ctx.save();
    ctx.translate(x, floor);
    ctx.scale(facing, -.27);
    ctx.globalAlpha = .18;
    ctx.filter = 'blur(2px)';
    wireFighter(ctx, pose, color);
    ctx.restore();
    ctx.save();
    ctx.translate(x, floor);
    ctx.scale(facing, 1);
    wireFighter(ctx, pose, color);
    ctx.restore();
  }
}

export const filmScenes = [brassTop, blackHole, fight];
