

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export function TypewriterText({ text, className = '' }: TypewriterTextProps) {
  return (
    <span className={className}>
      {text}
    </span>
  );
}