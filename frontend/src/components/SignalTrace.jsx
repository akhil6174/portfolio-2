// The signature visual element: an oscilloscope-like signal trace.
// Used in the hero, as section dividers, and conceptually in the scroll bar.

export default function SignalTrace({ className = '', color = '#3DDC97', strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0,60 L80,60 L110,20 L140,100 L170,40 L195,80 L220,60 L320,60
           L350,15 L380,105 L410,30 L435,90 L460,60 L560,60
           L590,25 L620,95 L650,45 L675,75 L700,60 L800,60
           L830,18 L860,102 L890,35 L915,85 L940,60 L1040,60
           L1070,22 L1100,98 L1130,40 L1155,80 L1200,60"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
