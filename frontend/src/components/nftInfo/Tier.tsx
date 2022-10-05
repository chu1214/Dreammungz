const color: { [index: string]: string } = {
  NORMAL: "from-gray-500 to-gray-200",
  RARE: "from-amber-500 to-amber-200",
  EPIC: "  from-sky-500  to-sky-300  ",
  UNIQUE: "from-rose-500 to-rose-200 ",
  LEGENDARY: "  to-lime-400 from-sky-500",
}

const Tier = ({ tier, large = false }: { tier: string; large?: boolean }) => {
  const symbol = tier.at(0)
  return (
    <div
      className={` relative rounded-lg ${
        large ? " w-[30px]  h-[35px]  " : " w-[20px]  h-[25px] "
      }  text-center  bg-gradient-to-br  ${
        color[tier]
      }  border-2 border-white m-0.5 outline  outline-1 outline-beige-700`}
    >
      <div
        className={` font-extrabold text-white  ${
          large ? " text-xl leading-[35px] " : "text-sm"
        }`}
      >
        {symbol}
      </div>
    </div>
  )
}

export default Tier
