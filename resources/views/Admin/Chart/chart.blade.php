@extends('Template.base')

@section('title', 'Chart User')

@section('content')
    <!-- Header -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Chart User</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Chart User</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <!-- End Header -->

    <!-- Chart -->
    <section class="content">
        <div class="container-fluid">
            <div id="chart"></div>
        </div>
    </section>

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/10/highcharts.js"></script>
    <script type="text/javascript">
        var user = <?php echo json_encode($user)?>;
        Highcharts.chart('chart', {
            title: {
                text: "Chart Data User"
            },
            xAxis: {
                categories: ['Admin', 'Customer']
            },
            yAxis: {
                title: {
                    text: "Jumlah User"
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOption: {
                series: {
                    allowPointSelect: true,
                }
            },
            series: [{
                name: 'user',
                data: user
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        });
    </script>
    <!-- End Chart -->
@endsection
