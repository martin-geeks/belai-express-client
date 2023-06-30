import { 
  Card,
  CardBody,
  CardFooter,
  Typography,
  CardHeader,
  ButtonGroup,
  Button,
  IconButton,
  Rating,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler
} from '@material-tailwind/react'
import { BellAlertIcon, EyeIcon, HeartIcon, HomeIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import dress from '@/public/karen-willis-holmes.jpg'
import { Product } from "@/utils/types";
import { NextPage } from 'next';
import { add } from '@/redux/features/cart';
import { useAppDispatch } from '@/redux/hooks';


const ProductCard:NextPage<Product> = (product:Product)=> {
    const dispatch = useAppDispatch()
    const labeProps = {
      variant: 'small',
      color:'blue-gray',
      className:'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal bg-white p-2'
    }

    return (

           
    <Card className="mx-auto border-2 h-[400px]  w-[200px] lg:w-[300px] lg:mx-0">
      <CardHeader shadow={false} floated={false} className=" lg:h-[250px] ">
        <SpeedDial placement='right' >
          <SpeedDialHandler className=' '>
            <IconButton className='absolute bg-gray-100 rounded-[50%] h-[50px] w-[50px] hover:bg-red-700'>
              <PlusIcon color='gray' className='h-5 w-5 hover:text-white'/>
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className='border '>
              <EyeIcon className='h-5 w-5' />
            </SpeedDialAction>
            <SpeedDialAction>
              <HeartIcon className='h-5 w-5' />
            </SpeedDialAction>
            <SpeedDialAction>
              <BellAlertIcon className='h-5 w-5' />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
        <img 
          src={product.img}// "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
          className="w-full lg:h-[200px] object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between lg:mb-2">
          <Typography color="blue-gray" className="font-medium">
            {product.name}
          </Typography>
          <Typography color="blue-gray" className="font-bold">
            ${product.amount}
          </Typography>
        </div>
        <Typography variant="small" color="gray" className="font-normal opacity-75 hidden">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className='flex items-center lg:gap-2 lg:my-2'>
            <Rating value={0} 
                className=''
            />
            <Typography>3.0 rated</Typography>
        </div>
        <Button
          ripple={true}
          fullWidth={true}
          size='sm'
          variant='text'
          color='red'
          className="flex justify-center gap-2 bg-red-700  text-white shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 hover:bg-red-500"
          onClick={()=> dispatch(add(product.id))}
        >
          <ShoppingCartIcon className='h-5 w-5' />
          <Typography className='normal-case text-sm h-5 '>Add to Cart</Typography>
          
        </Button>
      </CardFooter>
    </Card>
    )
} 
export default  ProductCard;