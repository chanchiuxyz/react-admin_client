import {
  HomeOutlined,
  MailOutlined,
  AppstoreOutlined,
  ProductOutlined,
  UserOutlined,
  BarChartOutlined,
  BarsOutlined,
  CheckSquareOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const  menuItems = [
    {
      key: '/admin',
      icon: <HomeOutlined />,
      label: 'Home Page',
      isPublic: true,
    },
    {
      key: 'Merchandise',
      label: 'Merchandise',
      icon: <AppstoreOutlined  />,
      children: [

        {
          key: '/category',
          icon: <BarsOutlined />,
          label: 'Categories',
        },
        {
          key: '/merchandise',
          icon: <ProductOutlined />,
          label: 'Merchandise',
        },

      ],
    },
    {
        key: '/user',
        label: 'User',
        icon: <UserOutlined />,
      },
      {
        key: '/role',
        label: 'Role',
        icon: <CheckSquareOutlined />,
      },
      {
        key: '/charts',
        label: 'Charts',
        icon: <PieChartOutlined />,
        children: [
          {
            key: '/column',
            icon: <BarChartOutlined />,
            label: 'Column-chart',
          },
          {
            key: '/line',
            icon: <LineChartOutlined />,
            label: 'Line-chart',
          },
          {
            key: '/pie',
            icon: <PieChartOutlined />,
            label: 'Pie-chart',
          },
        ],
      },
  ];

  export default menuItems;