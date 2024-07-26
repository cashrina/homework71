
const Orders = () => {
    // const [orders, setOrders] = useState<[]>([]);
    // const [loading, setLoading] = useState(false);
    //
    // const fetchOrders = useCallback(async () => {
    //     try {
    //         setLoading(true);
    //         const {data: orders} = await axiosApi.get<ApiPizza | null> (
    //             '/admin/orders.json',
    //         );
    //         if (!orders) {
    //             setOrders([]);
    //             return;
    //         }
    //
    //         const newOrders: PizzaMutation[] = Object.keys(orders).map((id) => {
    //             const order = orders[id];
    //
    //             const totalPrice = order.dishes.reduce((sum, cartDish) => {
    //                 return sum + cartDish.amount * cartDish.dish.price;
    //             }, 0);
    //     }
    // });
    return (
        <div>
            Orders
        </div>
    );
};

export default Orders;