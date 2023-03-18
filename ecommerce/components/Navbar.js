import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { Store } from '@/utils/Store';
import { signOut, useSession } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import Cookies from 'js-cookie';

export default function Navbar() {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const LogoutClickHandler = () => {
    Cookies.remove('Cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <nav className="flex h-12 justify-between shadow-md items-center px-4">
      <Link href="/" className="text-lg font-bold">
        CHAMAE ECOMMERCE
      </Link>
      <div>
        <Link href="/Cart" className="p-2">
          CART
          {cartItemsCount > 0 && (
            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
              {cartItemsCount}
            </span>
          )}
        </Link>

        {status === 'loading' ? (
          'Loading'
        ) : session?.user ? (
          /*    */
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="text-teal-800 font-bold">
              {session.user.name}
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg bg-white">
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/Profile">
                  Profile
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink
                  className="dropdown-link"
                  onClick={LogoutClickHandler}
                  href="#"
                >
                  Logout
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdown-link" href="/Profile">
                  History
                </DropdownLink>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <Link href="/login" className="p-2">
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
}
