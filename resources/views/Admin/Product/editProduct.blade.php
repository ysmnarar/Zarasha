@extends('Template.base')

@section('title', 'Form Edit Product')

@section('content')
    <!-- Header -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Form Edit Product</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active"><a href="#">Data Product</a></li>
                        <li class="breadcrumb-item active">Form Edit Product</li>
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
                        <form action="{{ route('admin.update.product', $products->id) }}" method="POST"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="img">Image</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" name="img"
                                                class="custom-file-input  @error('img') is invalid @enderror" id="img"
                                                value="{{ $products->img }}">
                                            <label class="custom-file-label" for="img">Choose file</label>
                                        </div>
                                        @error('img')
                                            <div class="invalid-feedback">
                                                <strong>{{ $message }}</strong>
                                            </div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Product Name</label>
                                    <input type="text" name="name"
                                        class="form-control @error('name') is invalid @enderror" id="name"
                                        placeholder="Enter the Product Name" value="{{ $products->name }}">
                                    @error('name')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="category_id">Category Product
                                    </label>
                                    <select
                                        class="custom-select form-control-border @error('category_id') is invalid @enderror"
                                        name="category_id" id="category_id">
                                        <option value="{{ $products->category_id }}">{{ $products->category_id }}</option>
                                        @foreach ($category as $row)
                                            <option value="{{ $row->category }}"
                                                {{ old('category') == $row->category ? 'selected' : '' }}>
                                                {{ $row->category }}
                                            </option>
                                        @endforeach
                                    </select>
                                    @error('category_id')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="inventory">Inventory</label>
                                    <input type="number" name="inventory"
                                        class="form-control @error('inventory') is invalid @enderror" id="inventory"
                                        placeholder="Enter inventory" value="{{ $products->inventory }}">
                                    @error('inventory')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" name="price"
                                        class="form-control @error('price') is invalid @enderror" id="price"
                                        placeholder="Enter price" value="{{ $products->price }}">
                                    @error('price')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="status">Status</label>
                                    <input type="text" name="status"
                                        class="form-control @error('status') is invalid @enderror" id="status"
                                        placeholder="Enter status" value="{{ $products->status }}">
                                    @error('status')
                                        <div class="invalid-feedback">
                                            <strong>{{ $message }}</strong>
                                        </div>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="desc">Description</label>
                                    <textarea class="form-control  @error('desc') is invalid @enderror" id="desc" name="desc" rows="3"
                                        placeholder="Enter ...">{{ $products->desc }}</textarea>
                                    @error('desc')
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
