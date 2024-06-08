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
      key: '/',
      icon: <HomeOutlined />,
      label: 'Home Page',
    },
    {
      key: 'Merchandise',
      label: 'Merchandise',
      icon: <AppstoreOutlined  />,
      children: [

        {
          key: '/merchandise',
          icon: <ProductOutlined />,
          label: 'Merchandise',
        },
        {
          key: '/category',
          icon: <BarsOutlined />,
          label: 'Categories',
        },
      ],
    },
    {
        key: 'Users',
        label: 'Users',
        icon: <UserOutlined />,
        children: [
          {
            key: '/category',
            icon: <MailOutlined />,
            label: 'Categories',
          },
          {
            key: '/merchandise',
            icon: <MailOutlined />,
            label: 'Merchandise',
          },
        ],
      },
      {
        key: 'Roles',
        label: 'Roles',
        icon: <CheckSquareOutlined />,
        children: [
          {
            key: '/category',
            icon: <MailOutlined />,
            label: 'Categories',
          },
          {
            key: '/merchandise',
            icon: <MailOutlined />,
            label: 'Merchandise',
          },
        ],
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