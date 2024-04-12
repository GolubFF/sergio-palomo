import Link from "next/link";

const liStyle = 'hover:text-gray-900'
const menuList = ['color','about','contact','blog',]
const Navigation = () => {
    const menu = menuList.map((el) => {
        return (
            <li key={el} className={liStyle}>
                <Link href={''}>{el}</Link>
            </li>
        )
    })
    return (
        <ul className={'flex mt-2 text-sm gap-8 uppercase font-light tracking-wider text-gray-400'}>
            {menu}
        </ul>
    )
}

export default Navigation