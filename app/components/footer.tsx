import SocialIcons from "@/app/components/social-icons";

export default function Footer() {
    return (
        <div className='mt-10 flex flex-col items-center gap-5'>
            <SocialIcons/>
            <span className='text-base uppercase font-light text-gray-800'> © 2024 Sergio Palomo </span>
        </div>
    )
}