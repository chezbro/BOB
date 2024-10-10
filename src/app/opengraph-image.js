import { ImageResponse } from 'next/server';

export const alt = 'BUILD OR BURY | Vote on Innovative Project Ideas';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        BUILD OR BURY
      </div>
    ),
    {
      ...size,
    }
  );
}