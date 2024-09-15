@extends('Template.base')

@section('title', 'Form Add Customer')

@section('content')
    <!-- Header -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Form Add Customer</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active"><a href="#">Data Customer</a></li>
                        <li class="breadcrumb-item active">Form Add Customer</li>
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
                        <form action="#" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="id">User Id</label>
                                    <input type="number" name="id"
                                        class="form-control @error('id') is invalid @enderror" id="id"
                                        placeholder="Enter the User Id">
                                    @error('id')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" name="name"
                                        class="form-control @error('name') is invalid @enderror" id="name"
                                        placeholder="Enter the Product Name">
                                    @error('name')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="name">Shopping cart Id</label>
                                    <input type="number" name="name"
                                        class="form-control @error('name') is invalid @enderror" id="name"
                                        placeholder="Enter the Product Name">
                                    @error('name')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="inventory">Wishlist Id</label>
                                    <input type="number" name="inventory"
                                        class="form-control @error('inventory') is invalid @enderror" id="inventory"
                                        placeholder="Enter inventory">
                                    @error('inventory')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- End Main Content -->
@endsection
