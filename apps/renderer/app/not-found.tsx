import {NotFound as NF} from "@workspace/ui/components/ui/not-found"
import { Code } from "@workspace/ui/icons"
export default function NotFound() {
return <>
 <div className="absolute top-5 left-5 sm:top-8 sm:left-8  flex items-center space-x-3 cursor-pointer">
        <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-md sm:rounded-xl bg-white flex items-center justify-center">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
        </div>
        <span className="text-2xl sm:text-3xl text-white bg-clip-text">GitFolio</span>
      </div>
<NF/>
</>
}

