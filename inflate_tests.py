import sys
import shutil


def main(copies=10):
    for i in range(copies):
        shutil.copyfile("./tests/query.test.js", f"./tests/copy{i + 1}.test.js")


if __name__ == "__main__":
    main(int(sys.argv[1]))
