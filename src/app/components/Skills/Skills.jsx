import Image from "next/image";

export default function MERN() {
    return (
        <div>
            <Image
                src={'/mongoDBIcon.png'}
                width={64}
                height={64}
                alt="Mongo DB Icon"
            />
            <Image
                src={'/expressJSIcon.png'}
                width={64}
                height={64}
                alt="Express JS Icon"
            />
            <Image
                src={'/reactIcon.png'}
                width={64}
                height={64}
                alt="React Icon"
            />
            <Image
                src={'/nodeJSIcon.png'}
                width={64}
                height={64}
                alt="Node JS Icon"
            />
        </div>
    )
}