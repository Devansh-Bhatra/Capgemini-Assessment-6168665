import sys
from functools import reduce
def power_of_four(n):
    return n ** 4
def process_case(pair):
    x, nums = pair
    actual = list(nums)
    if len(actual) != x:
        return -1
    negatives = list(filter(lambda n: n <= 0, actual))
    return reduce(lambda acc, n: acc + power_of_four(n), negatives, 0)

def parse_input(lines, index, n, pairs):
    if n == 0:
        return pairs
    x = int(lines[index])
    nums = tuple(map(int, lines[index + 1].split()))
    return parse_input(lines, index + 2, n - 1, pairs + [(x, nums)])
def print_results(results):
    if not results:
        return
    print(results[0])
    print_results(results[1:])
def main():
    lines = sys.stdin.read().splitlines()
    n = int(lines[0])
    pairs = parse_input(lines, 1, n, [])
    results = list(map(process_case, pairs))
    print_results(results)
if __name__ == "__main__":
    main()