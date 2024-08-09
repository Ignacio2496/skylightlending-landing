import {Link} from "@nextui-org/link";
import Popovers  from "./Popover";


function AboutUs() {

  return (
    <> 
    <div className='relative h-auto w-full  bg-background text-foreground'>
      <div className='poligono w-full h-full bg-background absolute bottom-[100%]'></div>
      <div className="w-full bg-background h-[100vh] grid grid-rows-2 sm:h-[80vh] md:grid-rows-none md:grid-cols-2">
          <div className='h-full w-full bg-background flex justify-center items-center flex-col'>
            <h1 className='text-4xl w-3/4 mb-6 sm:text-3xl lg:text-4xl'>Who are we?</h1> 
            <p className='w-3/4 h-2/4 text-sm sm:h-2/4 sm:text-xl lg:text-2xl'>We are not just another financial lending company providing loans. Our mission and our business is aimed at helping consumers, via strong installer relationships, that want to make a statement with their homes. Whether that statement is a new renovation or going renewable with solar panels, we are here to provide the support and financing to make the dream a reality. <br></br>
            Embrace the changemaker mindset. <Link className="text-sm  sm:text-xl lg:text-2xl" href="#">You’ve got this.</Link></p>
          </div>

          <div className='h-full w-full bg-background flex justify-center items-center flex-col lg:pl-5'>
            <h1 className='text-4xl w-3/4 mb-6 sm:text-3xl  lg:text-4xl lg:w-full'>How we can help you?</h1> 
            <div className='w-3/4 h-2/4 flex flex-col items-start lg:w-full '>
              <div className="h-[1px] w-full bg-blue-400 lg:w-3/4"></div>
                <Popovers
                name="Borrowers"
                description="From Solar installations to Home Improvement Projects, we help to make the project financing affordable and easy to manage."
                />
                <div className="h-[1px] w-full bg-blue-400 lg:w-3/4"></div>
                <Popovers
                name="Installers"
                description="Our team understands and listens to installers and their needs. Unlike some other financing companies, we aim to understand and be flexible where we can."
                />
                <div className="h-[1px] w-full bg-blue-400 lg:w-3/4"></div>
                <Popovers
                name="Supply Houses"
                description="We view supply houses as a critical aspect of the solar and home improvement supply chain.
                Our integrations with supply houses provide for better insight into our financed projects and give our customers a more seamless experience."
                />
                <div className="h-[1px] w-full bg-blue-400 lg:w-3/4"></div>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs
