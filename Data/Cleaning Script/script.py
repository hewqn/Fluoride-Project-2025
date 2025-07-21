import argparse
import pandas as pd

def compute_average_by_year_station(csv_file):
    df = pd.read_csv(csv_file)
    df['Year'] = pd.to_datetime(df['SampleDateTime']).dt.year
    grouped = (
        df
        .groupby(['Station', 'Year'])['MeasurementValue']
        .mean()
        .reset_index()
    )
    grouped.rename(
        columns={
            'Station': 'Area',
            'MeasurementValue': 'Average fluoride amount in mg/L'
        },
        inplace=True
    )
    grouped['Average amount in mg/L'] = grouped['Average fluoride amount in mg/L'].round(2)
    return grouped

def main():
    parser = argparse.ArgumentParser(
        description="Compute average MeasurementValue by station and year, output to Excel."
    )
    parser.add_argument(
        "csv_file",
        help="Path to the Water Quality CSV (e.g. Water Quality-LakesinAB.csv)"
    )
    parser.add_argument(
        "-o", "--output",
        default="averages.xlsx",
        help="Output Excel file path (default: averages.xlsx)"
    )
    args = parser.parse_args()

    df_out = compute_average_by_year_station(args.csv_file)

    df_out.to_excel(args.output, index=False, sheet_name="Averages")
    print(f"Wrote {len(df_out)} rows to {args.output}")

if __name__ == "__main__":
    main()
