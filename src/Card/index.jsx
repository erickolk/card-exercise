
export default function Card(props){
  return (
    <div className="p-5 w-screen flex justify-center items-center h-screen">
      <div className="flex bg-gray-400 gap-8 p-20 rounded-lg w-3/4 h-[90%]">
        <img className="border-8 border-black" src={ props.img } alt="" />
        <div className="w-3/5">
          <h2 className="font-bold text-4xl font-sans mb-10">{ props.title }</h2>
          <p className="font-sans text-base font-medium mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde minus aliquam atque recusandae eum architecto nisi nemo libero saepe molestias asperiores enim veniam cumque, perspiciatis voluptatibus esse tenetur, dolores temporibus neque officiis obcaecati. Vero, aspernatur?
          </p>
          <button className="bg-black text-white p-4 rounded-md shadow-md mt-8 shadow-black">Comprar agora</button>
        </div>
      </div>
    </div>
  )
}