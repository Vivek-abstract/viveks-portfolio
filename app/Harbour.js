import styles from './personal.module.css';

export default function Harbour() {
  return (
    <figure className={styles.harbour}>
      <svg className={styles.scene} viewBox="0 0 800 450" role="img" aria-label="An ink sketch of paper boats drifting past the Gateway of India at sunset">
        <defs>
          <linearGradient id="harbour-sky" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#2c1c30" />
            <stop offset=".62" stopColor="#704052" />
            <stop offset="1" stopColor="#ae665b" />
          </linearGradient>
          <linearGradient id="harbour-water" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop stopColor="#603649" />
            <stop offset="1" stopColor="#241927" />
          </linearGradient>
          <pattern id="harbour-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(34)">
            <path d="M0 0v6" stroke="#ffca9e" strokeWidth="1" opacity=".27" />
          </pattern>
          <pattern id="harbour-grain" width="19" height="17" patternUnits="userSpaceOnUse">
            <path d="M2 4h1m9 8h1m5-10h1M7 15h1" stroke="#fff1de" opacity=".16" />
          </pattern>
          <pattern id="harbour-jali" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M2.5 .7 4.3 2.5 2.5 4.3.7 2.5Z" fill="#70444c" />
          </pattern>
          <g id="harbour-pier">
            <path d="M-16 278v-7h3v-12h3V181h-4v-8h3v-22h-4v-7h5v-28h-3v-7h2V89h-2l3-5 2-5 4-5 2-5h4l2 5 4 5 2 5 3 5h-2v20h2v7h-3v28h5v7h-4v22h3v8h-4v78h3v12h3v7Z" fill="#ac735f" />
            <path d="M-5 89h10v19H-5zM-6 118H6v24H-6zM-6 152H6v20H-6zM-6 183H6v74H-6z" fill="#bb8368" stroke="none" />
            <path d="M8 91h3v18H8zm0 27h3v26H8zm0 33h3v22H8zm0 31h3v76H8z" fill="#7d4c4f" stroke="none" />
            <path d="M0 69v-5M-9 83H9m-10-5h2m-7 2h12m-18 7h24m-23 5h22m-23 17h24m-24 7h24m-23 28h22m-25 7h28m-25 22h22m-25 8h28m-24 8h20m-20 65h20m-24 7h28m-30 7h30m-32 5h32M-5 104v-8l2-2 2 2v8m3 0v-8l2-2 2 2v8" fill="none" />
          </g>
          <g id="harbour-side-arch">
            <path d="M-23 278V201h46v77Z" fill="#9d6257" />
            <path d="M-18 278v-45q0-16 18-26 18 10 18 26v45Z" fill="#d39b75" />
            <path d="M-15 233q0-13 15-22 15 9 15 22v5h-30Z" fill="url(#harbour-jali)" />
            <path d="M-12 241h24v37h-24Z" fill="#b67c62" />
            <path d="M-8 278v-25q0-5 8-11 8 6 8 11v25Z" fill="#593445" />
            <path d="M-18 238h36m-33-8h30m-15-17v24m-15 7v32m30-32v32" fill="none" />
          </g>
          <g id="harbour-paper">
            <path d="M-42 3-24 24h47L43 1 12 8 1-22-17 9Z" fill="#fbe1be" />
            <path d="M-42 3-17 9 1-22 12 8 43 1 23 24h-47Z" fill="none" />
            <path d="M-17 9 0 17 12 8M0-22l2 35m-26 11L0 17l23 7" fill="none" />
          </g>
        </defs>

        <path d="M0 0h800v450H0z" fill="url(#harbour-sky)" />
        <g transform="translate(92 0)">
          <circle cx="550" cy="163" r="93" fill="#db815e" opacity=".18" />
          <circle cx="550" cy="163" r="70" fill="#ffc18e" />
          <path d="M491 196h119m-110 11h100m-86 11h72" stroke="#9b4f4c" strokeWidth="2" opacity=".42" />
        </g>
        <path d="M0 0h800v450H0z" fill="url(#harbour-grain)" />
        <g className={styles.gulls} fill="none" stroke="#ffd6b0" strokeWidth="1.7" strokeLinecap="round">
          <path d="M467 88q8-6 16 2 6-8 15-6m-52 15q6-4 11 1 4-6 11-4m48-23q5-4 10 1 5-6 11-4" />
        </g>
        <g fill="none" stroke="#ffc79e" opacity=".36">
          <path d="M19 84q68-12 158-5M0 93q58-8 109-5m526 38q72-4 165 10m-123-17q62 0 105 6" />
          <path d="M0 250l51-7 36 4 45-13 41 4m425 12 29-5 44 6 44-11 38 6 47-3" />
        </g>

        <g stroke="#edb58c" strokeWidth=".95" strokeLinejoin="round" strokeLinecap="round">
          <path d="M181 278v-91h-9v-6h10v-24h-4v-5h8v-8h85v-31h8v-8h102v8h8v31h85v8h8v5h-4v24h10v6h-9v91Z" fill="#ad755f" />
          <path d="M181 194h298v84H181Z" fill="url(#harbour-hatch)" stroke="none" opacity=".7" />
          {[205, 218, 232, 247, 262].map((y) => (
            <path key={y} d={`M183 ${y}h294`} fill="none" opacity=".35" />
          ))}
          <path d="M186 144h88m112 0h88m-296 8h96m112 0h96m-301 7h92m114 0h92m-307 22h106m104 0h106m-316 6h104m108 0h104m-307 7h298M279 105h102m-104 8h106" fill="none" />
          <path d="M195 163h68v13h-68Zm202 0h68v13h-68Z" fill="url(#harbour-jali)" opacity=".68" />
          <path d="M285 121h90v21h-90Z" fill="#c48b6d" />
          <path d="M291 127h78m-77 4h76m-73 4h70" fill="none" opacity=".7" />
          <path d="M279 144h102v29H279Z" fill="#82504e" />
          <path d="M280 148h100m-98 23h96m-93 0v-22m11 22v-22m11 22v-22m11 22v-22m12 22v-22m12 22v-22m11 22v-22m11 22v-22m11 22v-22" fill="none" strokeWidth="1.5" />
          <path d="M296 278v-54q0-20 34-36 34 16 34 36v54Z" fill="#633c49" />
          <path d="M303 278v-52q0-17 27-29 27 12 27 29v52Z" fill="#ac695c" />
          <path d="M308 278v-48q0-16 22-26 22 10 22 26v48Z" fill="#d49376" stroke="none" />
          <path d="M299 278v-53q0-20 31-34 31 14 31 34v53" fill="none" />
          <circle cx="290" cy="193" r="3" fill="#88524f" />
          <circle cx="370" cy="193" r="3" fill="#88524f" />
          <use href="#harbour-side-arch" x="229" />
          <use href="#harbour-side-arch" x="431" />
          <use href="#harbour-pier" x="274" />
          <use href="#harbour-pier" x="386" />
          <path d="M170 278h320l15 6H153Z" fill="#72474c" />
          <path d="M151 284h356l29 8H123Z" fill="#4c303e" />
        </g>

        <path d="M0 295q109-7 202 0t221 0 201-1 176 1v155H0Z" fill="url(#harbour-water)" />
        <g className={styles.ripples} stroke="#f6ad83" strokeLinecap="round" fill="none">
          <path transform="translate(92 0)" d="M479 307h121m-142 10h158m-117 11h74m-96 12h125m-81 11h111m-164 14h76m-37 16h103m-72 15h45" opacity=".59" />
          <path d="M13 314q38-4 86 0m-45 29q47-5 106-2m18-29h110m-141 54q65-4 131-1m-257 34q94-7 161-1m132-65h82m-96 79q78-4 174 2m159-94h142m-122 42q65-5 111-1m-122 50q86-5 157 0" opacity=".38" />
          <path d="M15 427q65-5 134-2m29 9q71-6 153-3m205 2q111-5 204 0" opacity=".28" />
        </g>
        <g transform="translate(340 345) scale(.64)">
          <g className={styles.distantBoat} stroke="#67394a" strokeWidth="1.4" strokeLinejoin="round">
            <path d="M-85 23q35-6 59-2m-38 9q24-4 36-2" fill="none" stroke="#e5a482" opacity=".6" />
            <use href="#harbour-paper" />
          </g>
        </g>
        <g transform="translate(246 391)">
          <g className={styles.boat} stroke="#67394a" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M-108 24q46-10 77-2m-49 13q40-7 71-4m31 0q18-2 34 0" fill="none" stroke="#ffd4a6" opacity=".7" />
            <use href="#harbour-paper" />
          </g>
        </g>
      </svg>
      <figcaption className={styles.harbourCaption}>
        Gateway of India, Mumbai
      </figcaption>
    </figure>
  );
}
