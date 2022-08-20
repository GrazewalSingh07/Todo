
import { useEffect } from "react"
import { useDispatch ,useSelector} from "react-redux/es/exports"
 
import { fetchTodo } from "../Redux/todo/action"
import { Navigate } from "react-router"
import {Link} from "react-router-dom"
import { Container, Heading, HStack, Stack, VStack ,Text, Button} from "@chakra-ui/react"
export const Todos=()=>{
   
    const dispatch=useDispatch()//react-redux
    const todo=useSelector((state)=>state.todo.todo)//react-redux
    const isAuth=useSelector((state)=>state.auth.token)//react-redux
    const addedtodo=useSelector((state)=>state.todo.addedtodo)
    

    useEffect(()=>{
        dispatch(fetchTodo())
        
        
    },[addedtodo])
    if(!isAuth){
        return <Navigate to="/signin"/>
    } 

    
    return <Container maxW="container.2xl" >
            <Container maxW="container.2xl"  margin="auto"  display="flex">

                <Container>
                    <VStack>
                        <Text>
                            Filter
                        </Text>
                        <VStack>
                            <Button>
                                ALL
                            </Button>
                            <Button>
                                Personal
                            </Button>
                            <Button>
                                Official
                            </Button>
                            <Button>
                                Others
                            </Button>
                        </VStack>
                    </VStack>
                </Container>
                <Container  maxW="container.xl" display="flex">
                 <Container overflow="scroll" >
                 <Heading>TODO </Heading>
                    <Stack margin="auto"  height="100%" spacing={5}>
                    {todo?.map((el)=>(
                        
                        <VStack  spacing={10} key={el.id} backgroundColor="peru" color="white" >
                        <Heading>TASK</Heading>
                        <h3  style={{padding:".5rem"}}>{el.title}</h3>
                        <Link  to={`/todos/${el.id}`}><button >Open</button></Link> 
                        <Link  to={`/todo-edit/${el.id}`}><button>Edit</button></Link> 
                    </VStack>
                    
                    ))} 
                    </Stack>

                 </Container>
                 <Container overflow="scroll"  >
                 <Heading>in-progress </Heading>
                    <Stack margin="auto"  spacing={5} height="100%" >
                    {todo?.map((el)=>{
                       
                    if(el.status==false){
                        return  <VStack  spacing={10} key={el.id} backgroundColor="peru" color="white" >
                        <Heading>TASK</Heading>
                        <h3  style={{padding:".5rem"}}>{el.title}</h3>
                        <Link  to={`/todos/${el.id}`}><button >Open</button></Link> 
                        <Link  to={`/todo-edit/${el.id}`}><button>Edit</button></Link> 
                    </VStack>
                    }
                     
                    
                    })} 
                    </Stack>

                 </Container >
                 <Container overflow="scroll" >
                 <Heading>Done </Heading>
                    <Stack margin="auto"  height="100%" spacing={5}>
                    {todo?.map((el)=>{
                    if(el.status==true)
                        return <VStack  spacing={10} key={el.id} backgroundColor="peru" color="white" >
                        <Heading>TASK</Heading>
                        <h3  style={{padding:".5rem"}}>{el.title}</h3>
                        <Link  to={`/todos/${el.id}`}><button >Open</button></Link> 
                        <Link  to={`/todo-edit/${el.id}`}><button>Edit</button></Link> 
                    </VStack>
                    
                    })} 
                    </Stack>

                 </Container>
                  
                    
                </Container>

            </Container>

    </Container>
}


