export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Bitcoin',
    price: 799,
    description: 'Digital gold '
  },
  {
    id: 2,
    name: 'Ethereum',
    price: 699,
    description: 'Nft'
  },
  {
    id: 3,
    name: 'Solana',
    price: 299,
    description: 'Ultra fast network'
  },
  {
    id: 4,
    name: 'Terra',
    price: 499,
    description:'Good'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/