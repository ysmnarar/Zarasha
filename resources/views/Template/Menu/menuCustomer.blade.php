<li class="nav-item">
    <a class="nav-link" href="{{ route('customer.landing') }}">
        <i class="icon-grid menu-icon"></i>
        <span class="menu-title">Landing Page</span>
    </a>
</li>
<li class="nav-item">
    <a class="nav-link" data-toggle="collapse" href="#ui-basic" 
    aria-expanded="false" aria-controls="ui-basic">
        <i class="icon-layout menu-icon"></i>
        <span class="menu-title">Data Product</span>
        <i class="menu-arrow"></i>
    </a>
    <div class="collapse" id="ui-basic">
        <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="{{ route('customer.cart')}}">Shopping Cart</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Wishlist</a></li>
            <li class="nav-item"> <a class="nav-link" href="#">Transaction</a></li>
        </ul>
    </div>
</li>
