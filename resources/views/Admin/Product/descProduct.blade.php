<!-- Modal -->
<div class="modal fade" id="desc{{ $row->id }}">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Description Data Product</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-6 bg-white rounded-lg shadow-xl">
                <form action="{{ route('admin.desc.product', $row->id) }}" method="POST">
                    @csrf
                    <div class="mb-4">
                        <div class="w-full h-48 p-4 bg-gray-100 rounded-lg overflow-auto text-gray-800">
                            {{ $row->desc }}
                        </div>
                        <input type="hidden" name="id" value="{{$row->id}}">
                    </div>
                    <div class="flex justify-end mt-4">
                        <button type="button"
                            class="btn btn-secondary bg-gray-500 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600"
                            data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
<!-- End Modal -->