export type MenuBurgerProps = {
  width?: number | string;
  height?: number | string;
};

export default function MenuBurger({
  width = '100%',
  height = '100%',
}: MenuBurgerProps) {
  return (
    <svg
      width={width}
      height={height}
      className="fill-primary stroke-primary"
      viewBox="0 0 26 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 2H24.5" strokeWidth="3" strokeLinecap="round" />
      <path d="M1.5 8H24.5" strokeWidth="3" strokeLinecap="round" />
      <path d="M1.5 14H24.5" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
