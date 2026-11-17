type PortraitProps = {
  className?: string;
};

export function Portrait({ className }: PortraitProps) {
  return (
    <img
      className={className}
      src="/hassan-mustafa.png"
      width={249}
      height={255}
      alt="Hassan Mustafa, founder and CEO of IntelliForge"
    />
  );
}
