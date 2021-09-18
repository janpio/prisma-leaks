import sys
import shutil


def main(copies=10):
    for i in range(copies):
        shutil.copyfile("./tests/query.test.ts", f"./tests/copy{i + 1}.test.ts")


if __name__ == "__main__":
    main(int(sys.argv[1]))
