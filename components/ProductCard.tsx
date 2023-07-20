import { 
  Card,
 
  Typography,
  CardHeader,
  ButtonGroup,
  Button,
  IconButton,
  Rating,
  SpeedDial,
  SpeedDialAction,
  CardContent,
  CardMedia,
  CardActions
} from '@mui/material'
import { BellAlertIcon, EyeIcon, HeartIcon, HomeIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import dress from '@/public/karen-willis-holmes.jpg'
import { Product } from "@/utils/types";
import { NextPage } from 'next';
import { add } from '@/redux/features/cart';
import { useAppDispatch } from '@/redux/hooks';
import { BsPlus } from 'react-icons/bs';


const ProductCard:NextPage<Product> = (product:Product)=> {
    const dispatch = useAppDispatch()
    const labeProps = {
      variant: 'small',
      color:'blue-gray',
      className:'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal bg-white p-2'
    }

    return (
      <Card
        className='w-[300px] ny-3'
      >
        
          <CardMedia>
            <Image
              src={product.img}
              alt=''
              width={150}
              height={100}
            />
          </CardMedia>
          <CardContent>
          
            
          </CardContent>
          <CardHeader
          title={product.name}
          />
          <CardActions>
            <IconButton
              
            >
              <BsPlus />
              <Typography>
                Add to cart
              </Typography>
            </IconButton>
          </CardActions>
      </Card>
    )
} 
export default  ProductCard;