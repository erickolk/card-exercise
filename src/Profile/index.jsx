import Bio from "../Bio";
import Button from "../Button";
import Line from "../Line";
import Name from "../Name";
import ProfileSection from "../ProfileSection";

const follow = (ev) => {
  alert('Você está seguindo')
}
export default function Profile({avatar, nome, email, phone, githubUrl, linkedinUrk, xUrl}){
  return (
    <>
      <div className="flex flex-col w-[28%] h-[90%] bg-white rounded-2xl items-center">
        <img src={avatar} alt=""  className="max-w-[130px] pt-8"/>
        <Name nome="Jhon Due"/>
        <button onClick={follow}>
          Seguir
        </button>
        <Line color={"bg-indigo-300"}/>
        <Bio bio="Full-stack javascript developer."/>
        <Line color={"bg-blue-500"}/>
        <ProfileSection text="+55 11954678734"/>
        <Line color={"bg-indigo-300"}/>
        <ProfileSection text={"jhonduedeveloper@mail.com"}/>
        <Line color={"bg-blue-500"} />
        <ProfileSection className="bg-yellow-400">
          <Button text="Github" />
          <Button text="Linkedin" />
          <Button text="X" />
        </ProfileSection>
      </div>
    </>
  )
}