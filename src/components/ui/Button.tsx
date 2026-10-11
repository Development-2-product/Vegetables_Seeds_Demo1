import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-forest-800 text-cream-50 hover:bg-forest-900 shadow-soft hover:shadow-card-hover',
  secondary: 'bg-botanical-500 text-cream-50 hover:bg-botanical-600 shadow-soft hover:shadow-card-hover',
  outline: 'border border-forest-800/20 text-forest-800 hover:border-forest-800/40 hover:bg-forest-50',
  ghost: 'text-forest-800 hover:bg-forest-50',
  white: 'bg-cream-50 text-forest-800 hover:bg-white shadow-soft hover:shadow-card-hover',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
};

const baseClasses =
  'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2';

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  to?: undefined;
  href?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string;
  href?: undefined;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string;
  to?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className = '' } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }

  const { variant: buttonVariant, size: buttonSize, children: buttonChildren, className: buttonClassName, to, href, ...rest } = props as ButtonAsButton;
  void buttonVariant;
  void buttonSize;
  void buttonChildren;
  void buttonClassName;
  void to;
  void href;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export function ButtonWithArrow({ children, ...rest }: ButtonBaseProps & { to: string }) {
  return (
    <Button {...rest}>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
}
