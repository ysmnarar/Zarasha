<nav class="sidebar" id="sidebar">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="{{ route('index.home') }}">
                <i class="icon-grid menu-icon"></i>
                <span class="menu-title">Dashboard</span>
            </a>
        </li>
        <li class="nav-item">
            @if (Auth::user()->role == 1)
                @include('Template.Menu.menuAdmin')
            @elseif(Auth::user()->role == 2)
                @include('index')
            @endif
        </li>
    </ul>
</nav>
