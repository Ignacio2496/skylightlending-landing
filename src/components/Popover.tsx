import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

function Popovers(props: { name: string; description: string; }) {

    return (
      <> 
          <Popover placement="bottom" backdrop="opaque" offset={20} showArrow>
              <PopoverTrigger>
                <Button radius="none" className='bg-background text-foreground text-xl w-3/4 h-auto p-2 flex my-2 justify-start lg:text-2xl'>{props.name}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-xl text-foreground lg:text-2xl">{props.description}</div>
                </div>
              </PopoverContent>
            </Popover>
      </>
    )
  }
  
  export default Popovers
  