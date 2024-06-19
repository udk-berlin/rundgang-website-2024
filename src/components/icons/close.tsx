export type CloseProps = {
  width?: number | string;
  height?: number | string;
};

export default function Close({ width = '100%', height = '100%' }: CloseProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4934,33.9617l-14.5389,15.1654-6.2669-6.1415,14.6644-15.4161c1.7548-1.7548,1.6293-3.6348,0-5.2641L1.6875,6.8891,8.0797,.8729l14.4137,15.0404c1.6293,1.7548,3.6348,1.7548,5.2641,0L42.0457,.8729l6.2667,6.0162-14.5389,15.4163c-1.7546,1.6293-1.7546,3.5093-.1253,5.2641l14.6642,15.4161-6.1413,6.1415-14.4137-15.1654c-1.6293-1.6295-3.6348-1.6295-5.2641,0Z"
        fill="white"
      />
    </svg>
  );
}
