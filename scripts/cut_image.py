import os
import glob
from PIL import Image

# 带有通配符的目录路径
wildcard_path = "resources/Assets/Female3DCG/右眼_Luzi/**/眼睛1.png"

# 定义裁剪参数
crop_width = 140
crop_height = 100
crop_x = 180
crop_y = 120


def crop_image(source_path, destination_path, width, height, x, y):
    """裁剪图像并保存到目标路径。"""
    try:
        with Image.open(source_path) as img:
            if img.width < x + width or img.height < y + height:
                print(f"错误: 裁剪尺寸超出图像大小，跳过: {source_path}")
                return
            cropped_img = img.crop((x, y, x + width, y + height))
            cropped_img.save(destination_path)
            print(f"已裁剪: {source_path}")
    except Exception as e:
        print(f"处理图像时出错 {source_path}: {e}")


# 使用glob获取匹配通配符的所有文件
matching_files = glob.glob(wildcard_path, recursive=True)

# 打印找到的文件数量
print(f"找到 {len(matching_files)} 个匹配文件")

# 裁剪找到的所有图像
for file_path in matching_files:
    # 确保路径格式正确（使用正斜杠）
    file_path = file_path.replace("\\", "/")
    crop_image(file_path, file_path, crop_width, crop_height, crop_x, crop_y)

print("裁剪完成。")
