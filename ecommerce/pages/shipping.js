import Layout from '@/components/Layout';
import React, { useContext, useEffect } from 'react';
import CheckoutWizarda from '@/components/CheckoutWizarda';
import { useForm } from 'react-hook-form';
import { Store } from '@/utils/Store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function shipping() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();

  useEffect(() => {
    setValue('fullname', shippingAddress.fullname);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalcode);
    setValue('country', shippingAddress.country);
  }, [
    setValue,
    shippingAddress.address,
    shippingAddress.city,
    shippingAddress.country,
    shippingAddress.fullname,
    shippingAddress.postalcode,
  ]);

  const submitHandlder = ({ fullname, address, city, postalcode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullname, address, city, postalcode, country },
    });
    Cookies.set(
      'Cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullname,
          address,
          city,
          postalcode,
          country,
          location,
        },
      })
    );

    router.push('/payment');
  };
  return (
    <Layout title="Shipping Address">
      <CheckoutWizarda activetStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandlder)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullname">Full Name</label>
          <input
            className="w-full"
            id="fullname"
            autoFocus
            {...register('fullname', { required: 'please enter full name' })}
          />
          {errors.fullname && (
            <div className="text-red-600">{errors.fullname.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            className="w-full"
            id="address"
            autoFocus
            {...register('address', {
              required: 'please enter address',
              minLength: {
                value: 3,
                message: 'address is morethan 2 characters',
              },
            })}
          />

          {errors.address && (
            <div className="text-red-600">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            className="w-full"
            id="city"
            autoFocus
            {...register('city', { required: 'please enter city address' })}
          />
          {errors.city && (
            <div className="text-red-600">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="fullname">Postal Code</label>
          <input
            className="w-full"
            id="postalcode"
            autoFocus
            {...register('fullname', { required: 'please enter postalcode' })}
          />
          {errors.postalcode && (
            <div className="text-red-600">{errors.postalcode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            className="w-full"
            id="country"
            autoFocus
            {...register('country', { required: 'please enter full name' })}
          />
          {errors.country && (
            <div className="text-red-600">{errors.country.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}

shipping.auth = true;
