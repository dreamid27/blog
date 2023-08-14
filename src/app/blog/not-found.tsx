import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Halaman Tidak Ada</h2>
      <p>Mohon maaf, kami tidak dapat menemukan halaman yg anda cari</p>
      <Link href="/">Kembali ke Home</Link>
    </div>
  );
}
