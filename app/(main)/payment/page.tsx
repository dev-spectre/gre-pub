export default function PaymentPage() {
  const mainColor = "#1B438F";
  return (
    <main className="px-fluid-container grid  grid-cols-1 place-items-center py-12 text-center">
      <h1 className="text-xl-0 mb-10 text-center leading-tight font-[900] text-[#1B438F] capitalize md:mb-16 lg:mb-20">
        Payment page under construction
      </h1>
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[600px]"
      >
        <defs>
          <pattern
            id="constructionGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={mainColor}
              strokeWidth="1"
              opacity="0.05"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#constructionGrid)" />

        {/* Background Abstract Gears (Low opacity) */}
        <g opacity="0.1" fill={mainColor}>
          <circle cx="100" cy="100" r="30" />
          <path d="M90 60 H110 V140 H90 Z" transform="rotate(45 100 100)" />
          <path d="M90 60 H110 V140 H90 Z" transform="rotate(-45 100 100)" />
          <circle cx="500" cy="300" r="40" />
          <path d="M490 250 H510 V350 H490 Z" transform="rotate(30 500 300)" />
          <path d="M490 250 H510 V350 H490 Z" transform="rotate(-60 500 300)" />
        </g>

        {/* Main Construction Scene Group */}
        <g transform="translate(50, 50)">
          {/* The Crane Structure */}
          <g fill={mainColor}>
            {/* Crane Base on Ground */}
            <rect x="50" y="300" width="120" height="20" rx="2" />
            {/* Crane Tower */}
            <rect x="90" y="100" width="30" height="200" />
            {/* Crane Cabin */}
            <rect x="80" y="70" width="50" height="40" rx="4" />
            {/* Crane Arm/Jib */}
            <rect x="90" y="80" width="280" height="20" rx="2" />
            {/* Counterweight block */}
            <rect x="40" y="75" width="40" height="30" opacity="0.8" />
          </g>

          {/* Cables and Hook */}
          <g stroke={mainColor} strokeWidth="3" strokeLinecap="round">
            {/* Main lifting cable dropping down */}
            <line x1="340" y1="100" x2="340" y2="180" />
            {/* Support cables along the arm */}
            <line
              x1="120"
              y1="80"
              x2="340"
              y2="80"
              strokeWidth="1"
              opacity="0.5"
            />
            {/* Diagonal support structure on tower */}
            <line
              x1="90"
              y1="150"
              x2="120"
              y2="200"
              strokeWidth="2"
              opacity="0.3"
            />
            <line
              x1="120"
              y1="200"
              x2="90"
              y2="250"
              strokeWidth="2"
              opacity="0.3"
            />
          </g>
          {/* The Hook */}
          <path d="M330 180 H350 L340 200 Z" fill={mainColor} />

          {/* The "Website Module" Block being lifted */}
          <g transform="translate(270, 200)">
            {/* The block container looks like a browser window/UI element */}
            <rect
              width="140"
              height="100"
              rx="8"
              fill="white"
              stroke={mainColor}
              strokeWidth="4"
            />
            {/* Mock UI Header */}
            <rect
              x="10"
              y="10"
              width="120"
              height="20"
              rx="4"
              fill={mainColor}
              opacity="0.2"
            />
            {/* Mock UI Content Lines */}
            <rect
              x="10"
              y="40"
              width="80"
              height="8"
              rx="2"
              fill={mainColor}
              opacity="0.1"
            />
            <rect
              x="10"
              y="55"
              width="100"
              height="8"
              rx="2"
              fill={mainColor}
              opacity="0.1"
            />
            <rect
              x="10"
              y="70"
              width="60"
              height="8"
              rx="2"
              fill={mainColor}
              opacity="0.1"
            />
          </g>

          {/* Ground Level foundation elements */}
          <rect
            x="0"
            y="320"
            width="500"
            height="10"
            fill={mainColor}
            opacity="0.1"
            rx="2"
          />
          <rect
            x="20"
            y="335"
            width="460"
            height="5"
            fill={mainColor}
            opacity="0.05"
            rx="2"
          />
        </g>
      </svg>
    </main>
  );
}
