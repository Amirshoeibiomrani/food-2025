import Link from 'next/link'
 
const Header = () => {
  return (
    <nav className=' mx-auto'>
 
 <div className="flex items-center justify-between">
    <div className="flex gap-6 p-4">
             <Link href='/' className='text-xl'>Webprog.io</Link>
        <div className="flex gap-4">
        <Link href='/' className='hover:font-bold focus:ring-lime-200 focus:ring-2 focus:rounded-lg' >Home</Link>
        <Link href='/posts' className='hover:font-bold focus:ring-gray-200 focus:ring-2 focus:rounded-lg' >Posts</Link>
        </div>
    </div>
    <div className="flex justify-end gap-2 m-2 pr-10">
        <Link href='/auth/login' className='border-2 text-black hover:bg-black text-center hover:text-white p-1 rounded-lg'>Login</Link>
        <Link href='/auth/register' className='bg-black text-white p-1 rounded-lg text-center'>Register</Link>
    </div>
 </div>
    </nav>
  )
}

export default Header