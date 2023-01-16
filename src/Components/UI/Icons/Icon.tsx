import {Icons} from "./Icons";
import {Speed} from "./IconsList/Speed";
import {Errors} from "./IconsList/Errors";
import {Mail} from "./IconsList/Mail";
import {GitHub} from "./IconsList/GitHub";

export const Icon = ({icon}:{icon:Icons}) => {

  const switchIcon = () =>{
    switch (icon){
      case Icons.SPEED: return <Speed/>
        break;
      case Icons.ERRORS: return <Errors/>
        break;
      case Icons.MAIL: return <Mail/>
        break;
      case Icons.GITHUB: return <GitHub/>
    }
  }

  return (
    <>
      {switchIcon()}
    </>
  )
}