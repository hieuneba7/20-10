import http.server
import socketserver
import os

# Thay đổi thư mục làm việc thành thư mục chứa script này
# Điều này đảm bảo server luôn tìm đúng file dù bạn chạy nó từ đâu
abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)

# Cài đặt cổng mà server sẽ lắng nghe.
PORT = 8080

# Handler này sẽ phục vụ các file từ thư mục hiện tại
Handler = http.server.SimpleHTTPRequestHandler

# Sử dụng một khối 'with' để đảm bảo server được đóng đúng cách
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("==============================================")
    print("  🎉 MÁY CHỦ WEB ĐÃ KHỞI ĐỘNG! 🎉")
    print(f"  Truy cập trang web tại: http://localhost:{PORT}")
    print("==============================================")
    print("Nhấn Ctrl + C để tắt máy chủ.")
    
    try:
        # Bắt đầu chạy server
        httpd.serve_forever()
    except KeyboardInterrupt:
        # Xử lý khi người dùng nhấn Ctrl+C
        print("\nĐang tắt máy chủ...")
        httpd.server_close()