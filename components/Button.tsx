interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  ariaLabel?: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit"
}

export function Button({
  label,
  onClick,
  bgColor,
  ariaLabel,
  disabled = false,
  type = "button"
}: ButtonProps) {
  return (
    <div className="rounded-lg bg-gradient-to-t from-[#1b438f] to-[#34a0bd] px-[2px] py-[2px]">
      <button
        disabled={disabled}
        style={{ backgroundColor: bgColor }}
        className={`w-full rounded-md px-3 py-2 text-inherit capitalize hover:cursor-pointer disabled:pointer-events-none disabled:cursor-progress disabled:opacity-50`}
        type={type}
        onClick={onClick}
        aria-label={ariaLabel || label}
      >
        {label}
      </button>
    </div>
  );
}

interface ButtonLinkProps {
  label: string;
  href: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ButtonLink({
  label,
  href,
  onClick,
  disabled = false,
}: ButtonLinkProps) {
  return (
    <a
      aria-disabled={disabled}
      href={href}
      onClick={(e) => {
        if (disabled) {
          return;
        }
        onClick?.();
      }}
      className={`inline-block w-full rounded-lg bg-gradient-to-t from-[#1b438f] to-[#34a0bd] px-3 py-2 text-center text-inherit capitalize ${disabled && "pointer-events-none opacity-50"}`}
    >
      {label}
    </a>
  );
}
