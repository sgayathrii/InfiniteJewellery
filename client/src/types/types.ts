import store from "../redux/store";

export type Product = {
    _id: string;
    designerId: number,
    title: string;
    price: number;
    description: string;
    images: string[];  
    quantity?: number; 
    collections?: string;
    material?: string;
    color?: string;
    length?: string;
    closureType?: string;
    pendantDesign?: string;
    size?: string[];
    gemstone?: string;
    style?: string;
    occasions?: string;
    salePrice?: number;
    discountPercentage?: number; 
    designerTouch?: string;
    availability: number;
}

// User
export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string; 
  address: string; 
  apartment: string; 
  city: string; 
  state: string; 
  country: string;
  phone: string;
};

export type ProductWithQuantity = Product & {
  quantity: number;
};

export type Order = {
  _id: string;
  userId: string;
  productList: ProductWithQuantity[];
  createdAt: string;
};

export type Category = {
  _id: string;
  categoryName: string;
  imageUrl: string;
}


export type ShippingPageProps = {
  cartList: ProductWithQuantity[];
}

export type SearchFormProps = {
  onSubmit: (searchQuery: string) => void;
}


export type ProductCardProps = {
    product: Product;
    isNewCollection?: boolean; 
  };

export type ProductDetailDialogProps = {
  open: boolean;
  onClose: () => void;
}

//NavBar
export type NavbarMenuProps = {
    menuItems: string[];
    isOpen: boolean;
    onClose: () => void;
  }

export type NavBarRightProps = {
    cartItems: number;
    isLoggedIn: boolean;
  }

export type AccountDrawerProps = {
  open: boolean;
  onClose: () => void;
}

export type AuthFormProps = {
  onClose: () => void;
  onLogin: (userName: string) => void;
};

export type CartSidebarListProps = {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedImageIndex: number; 
}

export type CartSidebarItemProps = {
  cartItem: ProductWithQuantity; 
  selectedImageIndex: number; 
}

export type ImageSliderProps = {
  images: string[];
  imageHeight: number;
}

export type OrderDetailProps = {
  isOpen: boolean; 
  onClose: () => void; 
  orderDetails: Order;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;