type Props = {
  quote: string;
  reference: string;
  light?: boolean;
};

export default function ScriptureQuote({ quote, reference, light }: Props) {
  return (
    <blockquote className={`border-l-4 border-[#D4A017] pl-6 my-8 ${light ? "" : ""}`}>
      <p className={`font-display text-xl md:text-2xl italic font-light leading-relaxed ${light ? "text-[#F5E6A3]" : "text-[#8B6914]"}`}>
        &ldquo;{quote}&rdquo;
      </p>
      <cite className={`block mt-3 font-ui text-sm tracking-widest uppercase not-italic ${light ? "text-[#D4A017]" : "text-[#B8860B]"}`}>
        — {reference}
      </cite>
    </blockquote>
  );
}
