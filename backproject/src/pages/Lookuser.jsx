import React from 'react'
import { Table, Button } from 'antd';

const columns = [
    {
        title: '账号',
        dataIndex: 'name',
    },
    {
        title: '密码',
        dataIndex: 'password',
    },
    {
        title: '电话',
        dataIndex: 'phone',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
    },
    {
        title: '操作',
        dataIndex: 'option',
    },

];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        password: '123456',
        phone: '18209515484',
        email: '2233157734@163.com',
    });
}

export default class Lookuser extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        重新选择
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选中 ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}