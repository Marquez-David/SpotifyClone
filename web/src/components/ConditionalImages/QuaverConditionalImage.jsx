import Image from "next/image"

import QuaverIcon from "@/assets/icons/QuaverIcon.svg"

const QuaverConditionalImage = ({ image, className }) => (
  <>
    {image ? (
      <Image src={image.url} height={image.height} width={image.width} alt={`Cover image of ${image.url}`} className={className} />
    ) : (
      <div className={`${className} bg-background-elevated-highlight flex items-center justify-center`} >
        <Image src={QuaverIcon} height={22} width={22} alt="Quaver alter cover image" />
      </div>
    )}
  </>
)

export default QuaverConditionalImage