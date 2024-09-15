@extends('Template.base')

@section('title', 'Cart')

@section('content')
    <!-- Header -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Shopping Cart</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('admin.index.product') }}">Home</a></li>
                        <li class="breadcrumb-item active">Shopping Cart</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <!-- ENd Header -->

    <!-- Main Content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header justify-content-between" style="display: flex">
                            <div class="card-tools">
                                <div class="input-group input-group input-group-sm" style="width: 300px;">
                                    <form action="{{ route('product.search') }}" method="get">
                                        <div class="input-group-append">
                                            <input type="search" name="search" class="form-control float-right"
                                                placeholder="Search">
                                            <button type="submit" class="btn btn-default">
                                                <i class="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="card-body table-responsive p-0">
                            <!-- Alert Create -->
                            @if (Session::get('Create'))
                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                    {{ Session::get('Create') }}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            @endif
                            <!-- End Alert Create -->

                            <!-- Alert Update -->
                            @if (Session::get('Update'))
                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                    {{ Session::get('Update') }}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            @endif
                            <!-- End Alert Update -->

                            <!-- Alert Delete -->
                            @if (Session::get('Delete'))
                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                    {{ Session::get('Delete') }}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            @endif
                            <!-- End Alert Delete -->

                            <table class="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>User Id</th>
                                        <th>Product Id</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <a href="#" class="btn btn-secondary" data-toggle="modal"
                                                data-target="#">detail</i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Main Content -->
@endsection
