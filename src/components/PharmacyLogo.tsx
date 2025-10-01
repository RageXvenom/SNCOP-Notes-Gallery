import React from 'react';

const PharmacyLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="200"
        height="200"
        viewBox="-50 -50 250 250" // Increased viewBox to prevent clipping
        className="drop-shadow-md"
      >
        <defs>
          <radialGradient id="mortarGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id="venomGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9">
              <animate attributeName="stopColor" values="#22c55e;#16a34a;#22c55e;#4ade80;#22c55e" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#16a34a" stopOpacity="0.7">
              <animate attributeName="stopColor" values="#16a34a;#22c55e;#16a34a;#15803d;#16a34a" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.8">
              <animate attributeName="stopColor" values="#15803d;#4ade80;#15803d;#22c55e;#15803d" dur="2s" repeatCount="indefinite" />
            </stop>
          </radialGradient>
          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="pestleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="30%" stopColor="#d1d5db" />
            <stop offset="70%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
          <radialGradient id="blackSnakeGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="30%" stopColor="#0d0d0d" />
            <stop offset="60%" stopColor="#000000" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <pattern id="snakeScales" x="0" y="0" width="6" height="8" patternUnits="userSpaceOnUse">
            <ellipse cx="3" cy="4" rx="2.5" ry="3" fill="#2d2d2d" opacity="0.7" />
            <ellipse cx="3" cy="4" rx="1.5" ry="2" fill="#4b4b4b" opacity="0.4" />
          </pattern>
          <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="30%" stopColor="#2d2d2d" />
            <stop offset="60%" stopColor="#4b4b4b" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <linearGradient id="primaryFeather" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4b4b4b" />
            <stop offset="50%" stopColor="#2d2d2d" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <linearGradient id="secondaryFeather" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b6b6b" />
            <stop offset="50%" stopColor="#4b4b4b" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
        </defs>

        <path
          d="M15 100 Q15 125 27.5 132.5 L82.5 132.5 Q95 125 95 100 L92.5 87.5 Q90 80 82.5 80 L27.5 80 Q20 80 17.5 87.5 Z"
          fill="url(#venomGradient)"
          stroke="#1e40af"
          strokeWidth="3"
          opacity="0.8"
        />
        <g>
          <circle cx="30" cy="110" r="3" fill="#4ade80" opacity="0.6">
            <animate attributeName="r" values="3;6;3" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="110;90;110" dur="0.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="115" r="2" fill="#22c55e" opacity="0.5">
            <animate attributeName="r" values="2;5;2" dur="0.7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="0.7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="115;95;115" dur="0.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="108" r="2.5" fill="#16a34a" opacity="0.7">
            <animate attributeName="r" values="2.5;5.5;2.5" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.4;0.7" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="cy" values="108;88;108" dur="0.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="112" r="2.8" fill="#22c55e" opacity="0.6">
            <animate attributeName="r" values="2.8;5.8;2.8" dur="0.75s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="0.75s" repeatCount="indefinite" />
            <animate attributeName="cy" values="112;92;112" dur="0.75s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="110" r="2.2" fill="#4ade80" opacity="0.5">
            <animate attributeName="r" values="2.2;5.2;2.2" dur="0.85s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="0.85s" repeatCount="indefinite" />
            <animate attributeName="cy" values="110;90;110" dur="0.85s" repeatCount="indefinite" />
          </circle>
          <circle cx="45" cy="108" r="3.2" fill="#16a34a" opacity="0.7">
            <animate attributeName="r" values="3.2;6.2;3.2" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.4;0.7" dur="0.9s" repeatCount="indefinite" />
            <animate attributeName="cy" values="108;88;108" dur="0.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="35" cy="115" r="2.5" fill="#4ade80" opacity="0.6">
            <animate attributeName="r" values="2.5;5.5;2.5" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values="115;95;115" dur="0.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="65" cy="112" r="3" fill="#22c55e" opacity="0.5">
            <animate attributeName="r" values="3;6;3" dur="0.85s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="0.85s" repeatCount="indefinite" />
            <animate attributeName="cy" values="112;92;112" dur="0.85s" repeatCount="indefinite" />
          </circle>
        </g>
        <ellipse
          cx="55"
          cy="84"
          rx="37.5"
          ry="6"
          fill="url(#mortarGradient)"
          stroke="#1e40af"
          strokeWidth="2"
        />
        <ellipse cx="37.5" cy="90" rx="10" ry="12.5" fill="url(#glassReflection)" opacity="0.7" />
        <ellipse cx="70" cy="100" rx="6" ry="10" fill="url(#glassReflection)" opacity="0.5" />
        <ellipse cx="55" cy="110" rx="12.5" ry="7.5" fill="url(#glassReflection)" opacity="0.3" />
        <ellipse
          cx="55"
          cy="135"
          rx="30"
          ry="7.5"
          fill="url(#mortarGradient)"
          stroke="#1e40af"
          strokeWidth="2"
        />

        <rect x="68" y="40" width="4" height="85" fill="url(#pestleGradient)" stroke="#6b7280" strokeWidth="0.5" />
        <ellipse cx="70" cy="42.5" rx="4" ry="6" fill="url(#pestleGradient)" stroke="#6b7280" strokeWidth="0.5" />
        <ellipse cx="70" cy="120" rx="6" ry="4" fill="url(#pestleGradient)" stroke="#6b7280" strokeWidth="0.5" />

        {/* Left Wing - Larger and more dangerous */}
        <g transform="translate(-10, -5)"> {/* Shift left wing slightly */}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 42.5 30; -40 42.5 30; 30 42.5 30; -45 42.5 30; 25 42.5 30; 0 42.5 30"
            dur="2.5s"
            repeatCount="indefinite"
          />
          {/* Adjusted path for larger wing */}
          <path
            d="M42.5 30 Q5 0 -20 20 Q-30 40 0 60"
            stroke="url(#featherGradient)"
            strokeWidth="10" /* Thicker wing base */
            fill="none"
            strokeLinecap="round"
          />
          <g>
            {/* Primary feathers - larger and more pronounced */}
            <ellipse
              cx="0"
              cy="20"
              rx="40"
              ry="15"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(-55 0 20)"
            >
              <animate attributeName="ry" values="15; 18; 15" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="40; 45; 40" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="2.5"
              cy="23.5"
              rx="42"
              ry="16"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(-50 2.5 23.5)"
            >
              <animate attributeName="ry" values="16; 19; 16" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="42; 47; 42" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="5"
              cy="27"
              rx="44"
              ry="17"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(-45 5 27)"
            >
              <animate attributeName="ry" values="17; 20; 17" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="44; 49; 44" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="7.5"
              cy="30.5"
              rx="46"
              ry="18"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(-40 7.5 30.5)"
            >
              <animate attributeName="ry" values="18; 21; 18" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="46; 51; 46" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="10"
              cy="34"
              rx="48"
              ry="19"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(-35 10 34)"
            >
              <animate attributeName="ry" values="19; 22; 19" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="48; 53; 48" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="12.5"
              cy="37.5"
              rx="50"
              ry="20"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(-30 12.5 37.5)"
            >
              <animate attributeName="ry" values="20; 23; 20" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="50; 55; 50" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="15"
              cy="41"
              rx="52"
              ry="21"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(-25 15 41)"
            >
              <animate attributeName="ry" values="21; 24; 21" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="52; 57; 52" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
          </g>
          <g>
            {/* Secondary feathers - larger and more pronounced */}
            <ellipse
              cx="20"
              cy="44"
              rx="35"
              ry="13"
              fill="url(#secondaryFeather)"
              stroke="#374151"
              strokeWidth="0.8"
              transform="rotate(0 20 44)"
              opacity="0.9"
            />
            <ellipse
              cx="19"
              cy="47"
              rx="33"
              ry="12"
              fill="url(#secondaryFeather)"
              stroke="#374151"
              strokeWidth="0.8"
              transform="rotate(5 19 47)"
              opacity="0.8"
            />
            <ellipse
              cx="21"
              cy="50"
              rx="31"
              ry="11"
              fill="url(#secondaryFeather)"
              stroke="#374151"
              strokeWidth="0.8"
              transform="rotate(10 21 50)"
              opacity="0.7"
            />
            <ellipse cx="22.5" cy="42.5" rx="25" ry="10" fill="url(#featherGradient)" opacity="0.6" />
            <ellipse cx="24" cy="45.5" rx="23" ry="9.5" fill="url(#featherGradient)" opacity="0.5" />
            <ellipse cx="25" cy="48.5" rx="21" ry="9" fill="url(#featherGradient)" opacity="0.4" />
          </g>
          <g stroke="#000000" strokeWidth="0.3" opacity="0.7">
            <line x1="0" y1="16" x2="0" y2="24" />
            <line x1="2.5" y1="19.5" x2="2.5" y2="27.5" />
            <line x1="5" y1="23" x2="5" y2="31" />
            <line x1="7.5" y1="26.5" x2="7.5" y2="34.5" />
            <line x1="10" y1="30" x2="10" y2="38" />
            <line x1="12.5" y1="33.5" x2="12.5" y2="41.5" />
            <line x1="15" y1="37" x2="15" y2="45" />
          </g>
        </g>

        {/* Right Wing - Larger and more dangerous */}
        <g transform="translate(10, -5)"> {/* Shift right wing slightly */}
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 97.5 30; 40 97.5 30; -30 97.5 30; 45 97.5 30; -25 97.5 30; 0 97.5 30"
            dur="2.5s"
            repeatCount="indefinite"
          />
          {/* Adjusted path for larger wing */}
          <path
            d="M97.5 30 Q145 0 170 20 Q180 40 140 60"
            stroke="url(#featherGradient)"
            strokeWidth="10" /* Thicker wing base */
            fill="none"
            strokeLinecap="round"
          />
          <g>
            {/* Primary feathers - larger and more pronounced */}
            <ellipse
              cx="140"
              cy="20"
              rx="40"
              ry="15"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(55 140 20)"
            >
              <animate attributeName="ry" values="15; 18; 15" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="40; 45; 40" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="137.5"
              cy="23.5"
              rx="42"
              ry="16"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(50 137.5 23.5)"
            >
              <animate attributeName="ry" values="16; 19; 16" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="42; 47; 42" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="135"
              cy="27"
              rx="44"
              ry="17"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(45 135 27)"
            >
              <animate attributeName="ry" values="17; 20; 17" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="44; 49; 44" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="132.5"
              cy="30.5"
              rx="46"
              ry="18"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(40 132.5 30.5)"
            >
              <animate attributeName="ry" values="18; 21; 18" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="46; 51; 46" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="130"
              cy="34"
              rx="48"
              ry="19"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(-35 130 34)"
            >
              <animate attributeName="ry" values="19; 22; 19" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="48; 53; 48" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="127.5"
              cy="37.5"
              rx="50"
              ry="20"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(30 127.5 37.5)"
            >
              <animate attributeName="ry" values="20; 23; 20" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="50; 55; 50" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse
              cx="125"
              cy="41"
              rx="52"
              ry="21"
              fill="url(#primaryFeather)"
              stroke="#000000"
              strokeWidth="1"
              transform="rotate(25 125 41)"
            >
              <animate attributeName="ry" values="21; 24; 21" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="rx" values="52; 57; 52" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
          </g>
          <g>
            {/* Secondary feathers - larger and more pronounced */}
            <ellipse
              cx="120"
              cy="44"
              rx="35"
              ry="13"
              fill="url(#secondaryFeather)"
              stroke="#374151"
              strokeWidth="0.8"
              transform="rotate(0 120 44)"
              opacity="0.9"
            />
            <ellipse
              cx="121"
              cy="47"
              rx="33"
              ry="12"
              fill="url(#secondaryFeather)"
              stroke="#374151"
              strokeWidth="0.8"
              transform="rotate(-5 121 47)"
              opacity="0.8"
            />
            <ellipse
              cx="119"
              cy="50"
              rx="31"
              ry="11"
              fill="url(#secondaryFeather)"
              stroke="#374151"
              strokeWidth="0.8"
              transform="rotate(-10 119 50)"
              opacity="0.7"
            />
            <ellipse cx="117.5" cy="42.5" rx="25" ry="10" fill="url(#featherGradient)" opacity="0.6" />
            <ellipse cx="116" cy="45.5" rx="23" ry="9.5" fill="url(#featherGradient)" opacity="0.5" />
            <ellipse cx="115" cy="48.5" rx="21" ry="9" fill="url(#featherGradient)" opacity="0.4" />
          </g>
          <g stroke="#000000" strokeWidth="0.3" opacity="0.7">
            <line x1="140" y1="16" x2="140" y2="24" />
            <line x1="137.5" y1="19.5" x2="137.5" y2="27.5" />
            <line x1="135" y1="23" x2="135" y2="31" />
            <line x1="132.5" y1="26.5" x2="132.5" y2="34.5" />
            <line x1="130" y1="30" x2="130" y2="38" />
            <line x1="127.5" y1="33.5" x2="127.5" y2="41.5" />
            <line x1="125" y1="37" x2="125" y2="45" />
          </g>
        </g>

        {/* Snake - More dangerous, thicker body/tail, spots, and connected to wings */}
        <g>
          {/* Main snake body - thicker and more defined */}
          <path
            d="M55 107.5 Q57.5 105 55 102.5 Q52.5 100 55 97.5 Q57.5 95 55 92.5 Q52.5 90 55 87.5 Q57 85 60 82.5 Q65 80 68 85 Q70 87.5 72 72.5 Q74 60 70 50 Q65 40 55 25 Q47.5 22.5 42.5 15 Q45 7.5 52.5 5 Q55 4 57.5 5 Q65 7.5 67.5 15 Q62.5 22.5 55 25 Q50 40 55 50 Q60 60 58 72.5 Q56 85 58 87.5 Q60 90 58 92.5 Q56 95 58 97.5 Q60 100 58 102.5 Q56 105 58 107.5 Q60 110 55 107.5 Z"
            stroke="url(#blackSnakeGradient)"
            strokeWidth="10" /* Thicker stroke for the main body */
            fill="none"
            strokeLinecap="round"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 1.5,0; -1.5,0; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />

          {/* Snake tail - thicker and more detailed */}
          <path
            d="M70 87.5 Q67.5 85 70 82.5 Q72.5 80 75 82.5 Q77.5 85 75 87.5"
            stroke="url(#blackSnakeGradient)"
            strokeWidth="18" /* Thicker tail segment */
            fill="none"
            strokeLinecap="round"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0.75,0; -0.75,0; 0,0"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <path
            d="M75 82.5 Q72.5 80 75 77.5 Q77.5 75 80 77.5 Q82.5 80 80 82.5"
            stroke="url(#blackSnakeGradient)"
            strokeWidth="18" /* Thicker tail segment */
            fill="none"
            strokeLinecap="round"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0.45,0; -0.45,0; 0,0"
            dur="2s"
            repeatCount="indefinite"
          />
          <path
            d="M80 77.5 Q77.5 75 80 72.5 Q82.5 70 85 72.5 Q87.5 75 85 77.5"
            stroke="url(#blackSnakeGradient)"
            strokeWidth="18" /* Thicker tail segment */
            fill="none"
            strokeLinecap="round"
          />

          {/* Snake scales - more prominent */}
          <path
            d="M70 87.5 Q67.5 85 70 82.5 Q72.5 80 75 82.5 Q77.5 85 75 87.5"
            stroke="url(#snakeScales)"
            strokeWidth="16" /* Thicker scales */
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M75 82.5 Q72.5 80 75 77.5 Q77.5 75 80 77.5 Q82.5 80 80 82.5"
            stroke="url(#snakeScales)"
            strokeWidth="16" /* Thicker scales */
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M80 77.5 Q77.5 75 80 72.5 Q82.5 70 85 72.5 Q87.5 75 85 77.5"
            stroke="url(#snakeScales)"
            strokeWidth="16" /* Thicker scales */
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M70 87.5 Q67.5 85 70 82.5 Q72.5 80 75 82.5 Q77.5 85 75 87.5"
            stroke="#2d2d2d"
            strokeWidth="8" /* Inner detail for scales */
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M75 82.5 Q72.5 80 75 77.5 Q77.5 75 80 77.5 Q82.5 80 80 82.5"
            stroke="#2d2d2d"
            strokeWidth="8" /* Inner detail for scales */
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M80 77.5 Q77.5 75 80 72.5 Q82.5 70 85 72.5 Q87.5 75 85 77.5"
            stroke="#2d2d2d"
            strokeWidth="8" /* Inner detail for scales */
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Additional spots/details on snake body and neck */}
          <circle cx="50" cy="60" r="3" fill="#4b4b4b" opacity="0.8" />
          <circle cx="60" cy="65" r="4" fill="#2d2d2d" opacity="0.8" />
          <circle cx="55" cy="70" r="3.5" fill="#4b4b4b" opacity="0.8" />
          <circle cx="45" cy="75" r="2.5" fill="#2d2d2d" opacity="0.8" />
          <circle cx="65" cy="78" r="3" fill="#4b4b4b" opacity="0.8" />
          <circle cx="52" cy="82" r="4" fill="#2d2d2d" opacity="0.8" />
          <circle cx="48" cy="90" r="3.5" fill="#4b4b4b" opacity="0.8" />
          <circle cx="62" cy="93" r="2.5" fill="#2d2d2d" opacity="0.8" />
          <circle cx="57" cy="98" r="3" fill="#4b4b4b" opacity="0.8" />
        </g>

        {/* Snake Head - More dangerous look */}
        <g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 2,0; -1.5,0; 0.75,0; 0,0"
            dur="3.5s"
            repeatCount="indefinite"
          />
          <path
            d="M55 25 Q47.5 22.5 42.5 15 Q45 7.5 52.5 5 Q55 4 57.5 5 Q65 7.5 67.5 15 Q62.5 22.5 55 25 Z"
            fill="url(#blackSnakeGradient)"
            stroke="#000000"
            strokeWidth="1.5"
          />
          <path
            d="M55 22.5 Q50 20 47.5 15 Q50 10 55 9 Q60 10 62.5 15 Q60 20 55 22.5 Z"
            fill="url(#snakeScales)"
            opacity="0.5"
          />
          <path
            d="M42.5 17.5 Q32.5 15 27.5 7.5 Q30 2.5 37.5 4 Q45 6 55 7.5 Q65 6 72.5 4 Q80 2.5 82.5 7.5 Q77.5 15 67.5 17.5 Q62.5 20 55 19 Q47.5 20 42.5 17.5"
            fill="url(#blackSnakeGradient)"
            stroke="#000000"
            strokeWidth="1.5"
            opacity="0.9"
          >
            <animate
              attributeName="d"
              values="M42.5 17.5 Q32.5 15 27.5 7.5 Q30 2.5 37.5 4 Q45 6 55 7.5 Q65 6 72.5 4 Q80 2.5 82.5 7.5 Q77.5 15 67.5 17.5 Q62.5 20 55 19 Q47.5 20 42.5 17.5;
                    M41 19 Q30 16.5 24 6 Q27.5 0 35 2.5 Q42.5 5 55 9 Q67.5 5 75 2.5 Q82.5 0 86 6 Q80 16.5 69 19 Q64 21.5 55 20.5 Q46 21.5 41 19;
                    M42.5 17.5 Q32.5 15 27.5 7.5 Q30 2.5 37.5 4 Q45 6 55 7.5 Q65 6 72.5 4 Q80 2.5 82.5 7.5 Q77.5 15 67.5 17.5 Q62.5 20 55 19 Q47.5 20 42.5 17.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M45 12.5 Q55 10 65 12.5 M47.5 14 Q55 11.5 62.5 14 M50 16 Q55 14 60 16"
            stroke="#2d2d2d"
            strokeWidth="1"
            fill="none"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              values="M45 12.5 Q55 10 65 12.5 M47.5 14 Q55 11.5 62.5 14 M50 16 Q55 14 60 16;
                    M43.5 11 Q55 7.5 66.5 11 M46 12.5 Q55 9 64 12.5 M48.5 14.5 Q55 11.5 61.5 14.5;
                    M45 12.5 Q55 10 65 12.5 M47.5 14 Q55 11.5 62.5 14 M50 16 Q55 14 60 16"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          {/* Eyes - more menacing */}
          <ellipse cx="51" cy="14" rx="4" ry="4.5" fill="#dc2626">
            <animate attributeName="ry" values="4.5; 2.5; 4.5; 3.5; 4.5" dur="3s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#dc2626; #ef4444; #dc2626; #b91c1c; #dc2626" dur="2.5s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="59" cy="14" rx="4" ry="4.5" fill="#dc2626">
            <animate attributeName="ry" values="4.5; 2.5; 4.5; 3.5; 4.5" dur="3s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#dc2626; #ef4444; #dc2626; #b91c1c; #dc2626" dur="2.5s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="51" cy="14" rx="6" ry="7" fill="#dc2626" opacity="0.5">
            <animate attributeName="opacity" values="0.5; 0.9; 0.5; 0.7; 0.5" dur="2s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="59" cy="14" rx="6" ry="7" fill="#dc2626" opacity="0.5">
            <animate attributeName="opacity" values="0.5; 0.9; 0.5; 0.7; 0.5" dur="2s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="51" cy="14" rx="1" ry="3.5" fill="#000000" />
          <ellipse cx="59" cy="14" rx="1" ry="3.5" fill="#000000" />
          <ellipse cx="54" cy="17.5" rx="1" ry="2" fill="#ffffff" />
          <ellipse cx="56" cy="17.5" rx="1" ry="2" fill="#ffffff" />
          {/* Forked Tongue - more dynamic */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0.75,0; -0.75,0; 0,0"
              dur="0.8s"
              repeatCount="indefinite"
            />
            <path
              d="M55 21 L55 28 M53 28 L54 30 M56 30 L57 28"
              stroke="#dc2626"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            >
              <animate attributeName="opacity" values="0; 1; 1; 0; 0; 0; 1; 1; 0" dur="2s" repeatCount="indefinite" />
              <animate
                attributeName="d"
                values="M55 21 L55 28 M53 28 L54 30 M56 30 L57 28;
                      M55 21 L55 29 M52.5 29 L53.5 31 M56.5 31 L57.5 29;
                      M55 21 L55 28 M53 28 L54 30 M56 30 L57 28"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </path>
          </g>
          <path d="M52.5 19 Q55 20 57.5 19" stroke="#000000" strokeWidth="0.75" fill="none" opacity="0.7" />
        </g>

        <ellipse cx="35" cy="100" rx="9" ry="12.5" fill="url(#glassReflection)" opacity="0.4" />
        <ellipse cx="75" cy="95" rx="7.5" ry="10" fill="url(#glassReflection)" opacity="0.6" />
        <ellipse cx="55" cy="105" rx="25" ry="10" fill="#1e40af" opacity="0.2" />
        <ellipse cx="55" cy="120" rx="20" ry="5" fill="#ffffff" opacity="0.3" />
      </svg>
    </div>
  );
};

export default PharmacyLogo;

