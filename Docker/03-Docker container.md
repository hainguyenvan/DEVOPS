## Automatically restarting containers
* Docker cung cấp một số chiến lược restart như
 * Never restart(default)
 * Attempt to restart when a failure is detected: Luôn restart lại container khi phát hiện container bị chết
 * Restart lại container sau một khoảng thời gian định trước mà container đó chết
 * Always restart the container regardless of the condition: Luôn restart lại container bất kể điều kiện nào
* Do việc restart container không phải lúc nào cũng cố gắng restart lại mà chiến lược để restart lại một container là khoảng thời gian lặp lại việc restart sẽ theo hàm mũ