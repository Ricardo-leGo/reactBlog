import { ComponentProps, FC } from "react";


export const mergeComponents = (...components: FC[]): FC => {
  return components.reduce(
    
    (PrevComponents, CurrentComponents) => {

      return ({ children }: ComponentProps<FC>):JSX.Element => {
      
        return (
      
          <PrevComponents>
          
            <CurrentComponents>
          
              {children}
          
            </CurrentComponents>
          
          </PrevComponents>
        )
       }
        
    },
    ({ children }) => <>{ children }</>

  )
}