export type UnmuteProps = {
  width?: number | string;
  height?: number | string;
};

export default function Unmute({
  width = '100%',
  height = '100%',
}: UnmuteProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6 17.9V15.85C14.1 15.4167 15.3083 14.5834 16.225 13.35C17.1416 12.1167 17.6 10.7167 17.6 9.15002C17.6 7.58336 17.1416 6.18336 16.225 4.95002C15.3083 3.71669 14.1 2.88336 12.6 2.45002V0.400024C14.6666 0.866691 16.35 1.91252 17.65 3.53752C18.95 5.16252 19.6 7.03336 19.6 9.15002C19.6 11.2667 18.95 13.1375 17.65 14.7625C16.35 16.3875 14.6666 17.4334 12.6 17.9ZM1.59998 12.175V6.17502H5.59998L10.6 1.17502V17.175L5.59998 12.175H1.59998ZM12.6 13.175V5.12502C13.3833 5.49169 13.9958 6.04169 14.4375 6.77502C14.8791 7.50836 15.1 8.30836 15.1 9.17502C15.1 10.025 14.8791 10.8125 14.4375 11.5375C13.9958 12.2625 13.3833 12.8084 12.6 13.175ZM8.59998 6.02502L6.44998 8.17502H3.59998V10.175H6.44998L8.59998 12.325V6.02502Z"
        fill="black"
      />
    </svg>
  );
}
